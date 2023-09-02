const FileDownloader = require('file-downloader-go');

class DownloadQueue {
  constructor() {
    this.queue = [];
    this.currentDownloadIndex = 0;
    this.downloadInformation = {};
    this.lastProgress = -1;
  }

  enqueue({ pathID = false, url, dest }) {
    const downloader = new FileDownloader(url, dest);
    const cadenaBase64 = Buffer.from(url).toString('base64');
    let id = pathID === false ? cadenaBase64 : pathID;

    downloader.on('downloading', (progress) => {
      const roundedProgress = progress.toFixed(0);
      if (roundedProgress !== this.lastProgress) {
        let file = {
          id,
          url,
          progress: roundedProgress,
          complete: false
        };
        this.downloadInformation[id] = file;
        this.lastProgress = roundedProgress;
      }
    });

    downloader.on('end', (path) => {
      this.queue.splice(this.currentDownloadIndex, 1);
      this.downloadNext(pathID, url, id);
    });

    downloader.on('error', (error) => {
      console.error(`Error downloading ${url}: ${error}`);
      this.queue.splice(this.currentDownloadIndex, 1);
      this.downloadNext(pathID, url, id);
    });

    this.queue.push(downloader);
    this.downloadNext(pathID, url, id);
  }

  downloadNext(name, url, id) {
    if (this.currentDownloadIndex < this.queue.length) {
      const downloader = this.queue[this.currentDownloadIndex];
      downloader.download();
    } else {
      this.downloadInformation[id].complete = true;
    }
  }
}



module.exports = DownloadQueue;