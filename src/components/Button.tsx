type Props = {
  children: string
  onClick: () => void
  isActive: boolean
  disabled: boolean
}

const Button = ({ children, onClick, isActive, disabled }: Props) => {
  return (
    <button
      className={`btn  ${isActive ? 'btn-active' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
