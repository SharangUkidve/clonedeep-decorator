# CloneDeep Decorator

A simple decorator function that uses lodash's `cloneDeep` function to set and retrieve a deep cloned value.

**Note:** The getter also returns a deep clone to avoid mutations to the original value.

`npm i clonedeep-decorator`

`yarn add clonedeep-decorator`

## Usage

```
class MyFormComponent {
  formState: any;

  @CloneDeep() originalFormState: any;

  async getFormData() {
    this.formState = await (await fetch('example/api')).json();

    // Original Will Be A deepClone of the json
    this.originalFormState = this.formState;
  }

  resetFormState() {
    // formState will receive a fresh deepClone to avoid mutations to original
    this.formState = this.originalFormState;
  }
}
```

## Dependencies

`lodash` is a required dependency for the CloneDeep decorator.

`npm i lodash^4.17.21`

`yarn add lodash^4.17.21`

