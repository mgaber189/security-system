# Data Model

## Entities

### Camera
- id
- title
- description
- image
- price
- discount
- variants[]

### Variant
- id
- color
- quantity

### Sensor
- id
- title
- description
- price
- quantity

### Protection
- id
- title
- description
- price

### Plan
- id
- name
- description
- price

## Configuration

```ts
configuration = {
  cameras: [],
  sensors: [],
  accessories: [],
  plan: null,
}
```

## Derived State
- Total Price
- Savings
- Review Panel
- N Selected
