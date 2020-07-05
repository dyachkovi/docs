Menu example

```js
(() => {
  const [visible, setVisible] = React.useState(false)

  return (
    <div style={{position:'relative'}}>
      <Menu 
        visible={visible} 
        onClose={() => setVisible(false)}
        onMenuItemClick={(menuItem) => alert(menuItem)}
      />
      {visible ? null : <button onClick={() => setVisible(true)}>show menu</button>}
    </div>
  )
})()
```