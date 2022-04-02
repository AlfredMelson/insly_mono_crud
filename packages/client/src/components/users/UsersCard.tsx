import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { trpc } from '../../hooks'
import { userStateAtom } from '../../recoil-state'
import { PanelControls } from './controls'
import { HeaderSection } from './header'
import { TaglineSection } from './tagline'
import { User } from './user'

const UsersCard = () => {
  const setUserState = useSetRecoilState(userStateAtom)
  const results = trpc.useQuery(['getUsers'])

  useEffect(() => {
    if (results.data) {
      setUserState(results.data)
    }
  }, [results.data, setUserState])

  return (
    <>
      <HeaderSection />
      <TaglineSection />
      <User />
      <PanelControls />
    </>
  )
}
export default UsersCard
