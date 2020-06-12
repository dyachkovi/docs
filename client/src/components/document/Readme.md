Document example:

document with code

```js
(() => {
  const doc = {
    initiator: 'NachSklad',
    name: 'supply',
    history: [
      {
        responsible: 'Stas',
        state: null
      }, 
      {
        responsible: 'Lily',
        state: null
      },
       {
        responsible: 'Igor',
        state: null
      }
    ]
  }
  return <Document {...doc} />
})()
```
