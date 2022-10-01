# StandaloneComponents

1-app-using-scam-pattern

In this branch we have initial setup of the application which lazy loads Modules with and without router! We have used SCAM(Single Component Angular Module) Pattern to setup this basic project => Standalone Components behind the scenes used SCAM Pattern, every declarable have their own module.

We will migrate this project to use Standalone Components!


1. Lets start with AppComponent We need to set standalone flag to true with in Component Decorator

As soon as we make AppComponent standalone we get this below error:

Component AppComponent is standalone, and cannot be declared in an NgModule. Did you mean to import it instead?
 
It proves that Standalone Components behind the scenes use SCAM Pattern! 
We have to remove AppComponent from AppModule from both the declarations array and the bootstrap array. How will our Application bootstrap then?

We also get one more error:

'router-outlet' is not a known element:
1. If 'router-outlet' is an Angular component, then verify that it is included in the '@Component.imports' of this component.

This is coming because we are using RouterModule in AppComponent, But Router Module is not available to AppComponent Now as our AppComponent is 
standalone , it will manage all its dependencies on its own now! So we have to provide the RouterModule in AppComponent in imports Array!

Now our App Builds Successfully! But how will our AppComponent be bootstrapped as bootstrap array is empty?

For that Angular throws error in console:

main.ts:11 ERROR Error: NG0403: The module AppModule was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.

Now we have to open main.ts file to change how Angular bootstraps , since we want to get rid of AppModule!

Remove the already written code and use this one!

bootstrapApplication(AppComponent)
.catch((err)=>console.log(err));

Now there is no Error. But we haven't provided routes yet!

