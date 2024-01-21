type Props = {
  children: string
  onClick: () => void
  isActive: boolean
}

const Button = ({ children, onClick, isActive }: Props) => {
  return (
    <button
      className={`btn  ${isActive ? 'btn-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
