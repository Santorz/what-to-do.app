import React from 'react';
import { Grid, Segment, Icon, Header, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { currentLocalUser } from '../../parse-sdk/userVars';
import { invokeSignOut } from '../../parse-sdk/actions';

// CSS
import '../css/profile.css';
// Media
// import defaultUserAvatar from '../../media/avatar.png';
import saintAvatar from '../../media/saintAvatar.png';

const { firstName, lastName, email, accountType } = currentLocalUser() || {};

const Profile = ({ subHash }) => {
  // Main return
  return (
    /* Profile Container */
    subHash === 'account' &&
    currentLocalUser() && (
      <Grid
        textAlign='center'
        className='flex-column align-items-center'
        padded
        verticalAlign='middle'
        id='profile-body'
      >
        <Grid.Column
          mobile={16}
          tablet={11}
          computer={10}
          largeScreen={9}
          widescreen={8}
          id='profile-main-grid'
        >
          <Segment
            className='d-flex justify-content-between align-items-center mt-0'
            style={{ border: 'none', boxShadow: 'none' }}
          >
            <section className='d-flex align-items-center'>
              <Link
                to='/dashboard'
                className='p-1 rounded shadow-sm'
                style={{ backgroundColor: '#f0f0f0' }}
              >
                <Icon name='angle left' className='text-dark' size='big' />
              </Link>
              <Header
                as='h2'
                className='my-0 open-sans-font user-select-none ms-4'
              >
                My Account
              </Header>
            </section>
            <Icon name='ellipsis horizontal' size='big' />
          </Segment>
          {/* End of profile Heading */}

          {/* Use info part */}
          <Segment
            className='d-flex mt-4 align-items-center pt-0'
            style={{ border: 'none', boxShadow: 'none' }}
          >
            <section id='user-account-pic-section' className='d-flex'>
              <Image
                circular
                src={saintAvatar}
                width={50}
                id='user-account-pic'
              />
            </section>
            <section className='d-flex flex-column ms-3'>
              <h3 className='open-sans-font' style={{ fontSize: '1.45rem' }}>
                {firstName} {lastName}
              </h3>
              <div
                className='user-plan-status-div'
                style={{ textAlign: 'left' }}
              >
                <h4 className='my-0'>
                  {accountType && accountType.toUpperCase()}
                </h4>
              </div>
            </section>
            {/*  */}
          </Segment>
          {/* Profile main body */}
          <Segment
            raised
            className='d-flex mt-3 flex-column'
            id='profile-main-body'
            style={{ border: 'none' }}
          >
            <section className='profile-detail-section'>
              <span>
                <h5 className='mb-0 pb-1 text-teal'>Display Name</h5>
                <h3 className='open-sans-font my-0'>
                  {firstName} {lastName}
                </h3>
              </span>
              <span>
                <Button className='profile-detail-edit-button'>
                  Request Edit
                </Button>
              </span>
            </section>

            <section className='profile-detail-section'>
              <span>
                <h5 className='mb-0 pb-1 text-teal'>Email Address</h5>
                <h3 className='open-sans-font my-0'>{email}</h3>
              </span>
              <span>
                <Button className='profile-detail-edit-button'>Edit</Button>
              </span>
            </section>

            <section className='profile-detail-section'>
              <span>
                <h5 className='mb-0 pb-1 text-teal'>Password</h5>
                <h3
                  className='open-sans-font my-0'
                  dangerouslySetInnerHTML={{ __html: '&#8226;'.repeat(22) }}
                />
              </span>
              <span>
                <Button className='profile-detail-edit-button'>Change</Button>
              </span>
            </section>
          </Segment>
          {/*  */}
          {/* Pro plan segment */}
          {accountType === 'free' && (
            <Segment
              raised
              className='d-flex mt-3 flex-column px-0 pb-0'
              style={{
                border: 'none',
                borderBottomLeftRadius: '0.7rem',
                borderBottomRightRadius: '0.7rem',
                backgroundColor: '#f0f0f0',
              }}
            >
              <section className='profile-detail-section subscription-section px-3'>
                <span>
                  <h5 className='mb-0 pb-1 text-teal'>Subscription</h5>
                  <h3 className='open-sans-font my-0'>Free Plan</h3>
                </span>
                <span>
                  <Button
                    toggle
                    className='profile-detail-edit-button'
                    id='pro-upgrade-btn'
                  >
                    Upgrade to Pro
                  </Button>
                </span>
              </section>
              <section
                className='text-center mt-2'
                style={{
                  backgroundColor: '#ffffff',
                  borderBottomLeftRadius: '0.7rem',
                  borderBottomRightRadius: '0.7rem',
                }}
              >
                <Link to='/pricing' className='text-teal d-block py-3'>
                  <h3>
                    See the Pro Features &nbsp; <Icon name='external' />
                  </h3>
                </Link>
              </section>
            </Segment>
          )}

          {/*  */}
          <Button
            size='big'
            className='text-dark'
            id='profile-signout-btn'
            onClick={() => {
              invokeSignOut();
            }}
          >
            Sign out
          </Button>
        </Grid.Column>
      </Grid>
    )
  );
};

export default Profile;
