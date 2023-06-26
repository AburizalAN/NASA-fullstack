const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md shadow-[#00000008]">{children}</div>
  )
}

export default Card;