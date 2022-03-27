export function formatNumber(
    number: string | number,
    divider: string = ',',
  ): string {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${divider}`);
  }