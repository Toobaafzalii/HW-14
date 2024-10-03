const Input: React.FC<Iprops> = (props) => {
  return (
    <div className="py-5">
      <label htmlFor={`${props.label}`} className="block text-lg font-bold leading-6 text-gray-900">
      {`${props.label}`}
      </label>
      <div className="relative mt-2 rounded-md shadow-md">
        <input
          id= {`${props.id}`}
          type= {`${props.type}`}
          placeholder= {`${props.placeHolder}`}
          aria-invalid="true"
          aria-describedby={`${props.id}-error`}
          className="block w-full rounded-md border-0 py-2 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-red-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
        />
      </div>
      <p id={`${props.id}-error`} className="mt-2 text-sm text-red-600 font-semibold">
        Not a valid {`${props.id}`}!
      </p>
    </div>
  )
}

export default Input