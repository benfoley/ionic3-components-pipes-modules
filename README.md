Example Ionic project of how to use `components.module.ts` and `pipes.modules.ts` modules to load custom components and pipes.

See `/src/components/components.modules.ts` for method of loading a custom component. 

That `ComponentsModule` class gets imported in the `src/app/app.module.ts` file, as well as any modules that will use the component, for example our `/src/pages/home.module.ts` file. 

Likewise for pipes.

Note that if the custom components use ionic magic things like ion-icon, the component needs to be imported with `IonicModule.forRoot(Word)`. See `components.module.ts` for how to do this.
