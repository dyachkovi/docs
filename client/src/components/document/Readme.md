Document example:

document with code

```js
(() => {
  const doc = {
    initiator: 'NachSklad',
    name: 'supply',
    history: [
      {
        responcible: 'Stas',
        state: null
      }, 
      {
        responcible: 'Lily',
        state: null
      },
       {
        responcible: 'Igor',
        state: null
      }
    ]
  }
  return <Document {...doc} />
})()
```
