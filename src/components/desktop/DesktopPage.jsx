import { useAppContext } from "../context/AppContext"

const DesktopPage = () => {
  const { app } = useAppContext();

  return (
    <div>{ app.desktopContent }</div>
  )
}
export default DesktopPage