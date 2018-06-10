#angular-library-interactjs

## Installation

To install this library, run:

```bash
$ npm install angular-library-interactjs --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-library-interactjs
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { ng2Move } from angular-library-interactjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  
    // Specify your library as an import
    InteractJSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use Ng2Move directive in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
 
       <div   Ng2Move >
       </div>

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ahmed Yousri Salama Mohammed](mailto:hemeda2@gmail.com)
