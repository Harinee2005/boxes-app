const Box = props => {
  const {content, style} = props
  return (
    <div className={`${style} box`}>
      <p className='para'>{content}</p>
    </div>
  )
}

const element = (
  <div>
    <h1 class='heading'>Boxes</h1>
    <div class='box-container'>
      <Box content='Small' style='small' />
      <Box content='Medium' style='medium' />
      <Box content='Large' style='large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
