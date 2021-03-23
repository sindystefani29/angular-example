import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    let el = {
      nativeElement: document.createElement('div')
    };
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
