export function downloadBlob(
  data: Blob,
  filename: string,
  type = 'application/octet-stream',
): void {
  if ('msSaveBlob' in navigator) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call -- wait a few time to refactor
    (navigator.msSaveBlob as any)?.(data, filename);
  } else {
    const blob = new Blob([data], { type });
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- hack for safari old version
    const URL = window.URL || window.webkitURL;
    const downloadUrl = URL.createObjectURL(blob);
    if (filename) {
      const a = document.createElement('a');
      if (typeof a.download === 'undefined') {
        window.location.href = downloadUrl;
      } else {
        a.href = downloadUrl;
        a.target = '_blank';
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } else {
      window.location.href = downloadUrl;
    }
    setTimeout(() => {
      URL.revokeObjectURL(downloadUrl);
    }, 100);
  }
}
