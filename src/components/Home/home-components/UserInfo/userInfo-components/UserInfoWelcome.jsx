import './UserInfoWelcome.css'
import profileImage from '../../../../../assets/images/profileImage.jpg'

const UserInfoWelcome = () => {
  return (
    <div className='UserInfoWelcome'>
        <img className="UserInfoWelcome__profileImage" src= {profileImage} alt='profileImage' />
        <div className='UserInfoWelcome__profileImageText'>
          <h3 className='mg0 mdText fontBitter textColorPrimary'>Hi Mike,</h3>
          <h5 className='mg0 smText lightFontWeight'>welcome back.</h5>
        </div>
      </div>
  )
}

export default UserInfoWelcome