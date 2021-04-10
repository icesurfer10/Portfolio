import content from './content.json';

const language = {
  text(key: string | null): string {
    if (key === null || key === '') {
      return '';
    }

    return key.split('.').reduce((o: any, i: any) => o[i], content);
  }
}

export default language;