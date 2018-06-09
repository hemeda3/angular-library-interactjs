  import * as interacter_ from 'interactjs';
  let interacter: any = (<any>interacter_).default || interacter_;

import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[sampleDirective]'
})
export class SampleDirective {

  constructor(private el: ElementRef, renderer: Renderer) {
    renderer.setElementProperty(el.nativeElement, 'innerHTML', 'some new value');
 }

  ngOnInit2() {
    const el = this.el.nativeElement;
            // const arrow = document.getElementsByClassName('.container-fluid');

        // target elements with the 'draggable' class
        interacter(el)

          .draggable({

            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
              restriction: parent,
              endOnly: true,
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,

            // call this function on every dragmove event
            onmove: this.dragMoveListener,
            // call this function on every dragend event
            onend: function (event) {
              const textEl = event.target.querySelector(el);

                // tslint:disable-next-line:no-bitwise
              // tslint:disable-next-line:no-unused-expression
              textEl && ( textEl.textContent =
                'moved a distance of '
                // tslint:disable-next-line:no-bitwise
                + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                  Math.pow(event.pageY - event.y0, 2) | 0))
                  .toFixed(2) + 'px');
            }
          });
      }

      dragMoveListener(event) {
        const target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
          target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }

}
