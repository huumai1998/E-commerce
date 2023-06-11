import  Spinner  from "react-bootstrap/Spinner"

export const LoadingBox = () => {
  return (
    <>
    <Spinner animation="border" role="staus">
        <span className="visual-hidden">Loading...</span>
    </Spinner>
    </>
  )
}
