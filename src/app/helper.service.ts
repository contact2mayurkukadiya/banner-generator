import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getMeta(src): Promise<any> {
    return new Promise((resolve, reject) => {
      var img = new Image;
      img.crossOrigin = "anonymous",
        img.onload = function (e) {
          resolve({
            height: img.height,
            width: img.width,
            src: img.src
          })
        }
      img.onerror = function (e) {
        reject(e);
      }

      img.src = src
    })
  }

  dataURLtoBlob(dataurl) {
    let parts = dataurl.split(','), mime = parts[0].match(/:(.*?);/)[1]
    if (parts[0].indexOf('base64') !== -1) {
      let bstr = atob(parts[1]), n = bstr.length, u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], { type: mime })
    } else {
      let raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: mime })
    }
  }

  _download(filename, dataUrl) {
    let element = document.createElement('a');
    let dataBlob = this.dataURLtoBlob(dataUrl);
    element.setAttribute('href', URL.createObjectURL(dataBlob));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  _convertOffsetIntoStopColorArray(colorArray) {
    let cArray = [];
    colorArray.forEach(element => {
      cArray.push({ color: element.color, stop: element.offset })
    });
    return cArray;
  }

  _convertStopIntoOffsetColorArray(colorArray) {
    let cArray = [];
    colorArray.forEach(element => {
      cArray.push({ color: element.color, offset: element.stop })
    });
    return cArray;
  }

  generateCssFromArray(colorstopArray): Promise<string> {
    let tmp = JSON.parse(JSON.stringify(colorstopArray));
    return new Promise((resolve, reject) => {
      if (colorstopArray && colorstopArray.length >= 2) {
        let cssBackground = 'linear-gradient(to right';

        // this.cssColorArray = [];
        this.sortColorArray(tmp, 'stop').then(sortedResult => {
          sortedResult.forEach((element, index) => {
            let stop: number = Number(element.stop);
            let percent: number = this.getPercentFromValue(stop);
            cssBackground += ', ' + element.color + ' ' + percent + '%'
            element.stopInPercent = percent
          });
          cssBackground += ')'
          resolve(cssBackground);
        });
      }
    })
  }

  sortColorArray(arr, prop): Promise<any> {
    return new Promise(resolve => {
      arr.sort(this.GetSortOrder(prop));
      resolve(arr);
    })
  }

  GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }
  
  getPercentFromValue(value): number {
    return ((value - 0) / (1 - 0)) * 100
  }

  edgeOfView(rect, deg) {
    // This function return boundry point at button edge based on angle value from center.
    // Picked From : https://stackoverflow.com/questions/33206498/find-rectangle-boundary-point-at-an-angle-from-point-that-is-not-in-the-middle-o
    var twoPI = Math.PI * 2;
    var theta = deg * Math.PI / 180;
    while (theta < -Math.PI) {
      theta += twoPI;
    }
    while (theta > Math.PI) {
      theta -= twoPI;
    }
    var rectAtan = Math.atan2(rect.height, rect.width);
    var tanTheta = Math.tan(theta);
    var region;

    if ((theta > -rectAtan) && (theta <= rectAtan)) {
      region = 1;
    } else if ((theta > rectAtan) && (theta <= (Math.PI - rectAtan))) {
      region = 2;
    } else if ((theta > (Math.PI - rectAtan)) || (theta <= -(Math.PI - rectAtan))) {
      region = 3;
    } else {
      region = 4;
    }

    var edgePoint = { x: rect.width / 2, y: rect.height / 2 };
    var xFactor = 1;
    var yFactor = 1;

    switch (region) {
      case 1: yFactor = -1; break;
      case 2: yFactor = -1; break;
      case 3: xFactor = -1; break;
      case 4: xFactor = -1; break;
    }

    if ((region === 1) || (region === 3)) {
      edgePoint.x += xFactor * (rect.width / 2.);                                     // "Z0"
      edgePoint.y += yFactor * (rect.width / 2.) * tanTheta;
    } else {
      edgePoint.x += xFactor * (rect.height / (2. * tanTheta));                        // "Z1"
      edgePoint.y += yFactor * (rect.height / 2.);
    }

    return edgePoint;
  }
}
