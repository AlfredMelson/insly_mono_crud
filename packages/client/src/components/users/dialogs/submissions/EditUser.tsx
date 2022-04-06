interface IEditUser {
  onClick: any
  btnText: string
  disabled?: boolean
  verified?: boolean
  submitting?: boolean
  successSubmit?: boolean
}

export default function EditUser({
  onClick,
  btnText,
  verified,
  disabled,
  submitting,
  successSubmit
}: IEditUser) {
  return (
    <div className='relative mt-4'>
      <button
        className='rounded bg-white py-2 px-4 text-center text-black hover:bg-gray-200'
        disabled={disabled}
        onClick={onClick}>
        {!submitting ? btnText : successSubmit && 'Check Icon'}
      </button>
    </div>
  )
}