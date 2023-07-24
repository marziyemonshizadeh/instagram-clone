import React from 'react';

import './aboutMe.css';

const AboutMe = () => {
    return ( 
        <>
          <div className="parallax img1"></div>
          <section className='container'>
            <p className='lh-lg text-break my-5'>
            Instagram is a photo and video sharing social networking service owned by American company Meta Platforms. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging. Posts can be shared publicly or with preapproved followers. Users can browse other users' content by tag and location, view trending content, like photos, and follow other users to add their content to a personal feed. Instagram was originally distinguished by allowing content to be framed only in a square (1:1) aspect ratio of 640 pixels to match the display width of the iPhone at the time. In 2015, this restriction was eased with an increase to 1080 pixels. It also added messaging features, the ability to include multiple images or videos in a single post, and a Stories feature—similar to its main competitor Snapchat—which allowed users to post their content to a sequential feed, with each post accessible to others for 24 hours. As of January 2019, Stories is used by 500 million people daily. Originally launched for iOS in October 2010 by Kevin Systrom and Mike Krieger, Instagram rapidly gained popularity, with one million registered users in two months, 10 million in a year, and 1 billion by June 2018. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock. The Android version was released in April 2012, followed by a feature-limited desktop interface in November 2012, a Fire OS app in June 2014, and an app for Windows 10 in October 2016. As of October 2015, over 40 billion photos had been uploaded. Although often admired for its success and influence, Instagram has also been criticized for negatively affecting teens' mental health, its policy and interface changes, its alleged censorship, and illegal and inappropriate content uploaded by users.
            </p>
            <h2 className=' my-2'>History</h2>
            <div className='mt-3 lh-lg text-break'>
             Instagram was started in San Francisco by Kevin Systrom and Mike Krieger, who initially tried creating a platform similar to Foursquare but then turned their attention exclusively to photo sharing. The word Instagram is an amalgam of "instant camera" and "telegram."
             The iOS app was released through the iTunes App Store on Oct. 6, 2010, and the Android app was released on April 3, 2012. The platform's popularity skyrocketed, with the company reporting more than 40 million active users just two years after launch. This caught the attention of Facebook, which officially purchased Instagram for $1 billion in the summer of 2012.
             Originally, only photos could be posted to Instagram, but the company expanded to 15-second videos in 2013. In 2016, Instagram upped the maximum video length to 60 seconds. Until 2015, all photos posted to Instagram were confined to a square aspect ratio. The company changed this to allow users to upload photos and video at full size.
             The company has been the source of some controversy. In 2012, Instagram added this sentence to its Terms of Service policy:
             <p className='mx-4'>To help us deliver interesting paid or sponsored content or promotions, you agree that a business or other entity may pay us to display your username, likeness, photos (along with any associated metadata), and/or actions you take, in connection with paid or sponsored content or promotions, without any compensation to you.</p>
             Following heavy backlash from users who feared Instagram would sell their photos and identifiers, CEO Systrom assured users that wasn't the company's intention. The language was quickly removed from the policy.<br/>
             A 2013 controversy centered around criticisms that Instagram was censoring photos that didn't break the company's terms and conditions and that these censorships were unfairly targeting women's bodies. Instagram's decision in 2016 to shift from displaying timeline photos in chronological order to using an algorithm to determine photo order also drew negative feedback.
             As of April 2017, the company had 700 million active users, more than twice that of Twitter's total user base.
            </div>
          </section>
          <div className="parallax img2 my-3"></div>
          <section className='container'>
              <h3 className='my-4'>Editing tools and features</h3>
             <div className='mt-3 lh-lg text-break'>
              Instagram provides a wide range of digital filters that can be applied to users' photos, including ones that add a vintage or faded look. Other editing features include Lux, an effect that lightens shadows, darkens highlights and increases contrast, and photo-tuning tools allow users to adjust brightness, contrast, saturation, sharpness, structure, straightness and tint. A manual tilt shift and vignette effect can also be added to photos.<br/>
              In 2017, Instagram rolled out a feature that allows users to post multiple photos or videos at once, presented in a carousel format.
              Taking inspiration from the popular Snapchat app, Instagram introduced a Stories feature in 2016 that allows users to share moments from their day that disappear after 24 hours. Instagram Stories includes the ability to incorporate augmented reality-based face filters and stickers, and the ability to add text, drawings, emojis, links and geotags directly to the photo or video. In April 2017, Instagram Stories recorded 200 million active users, surpassing the active users of Snapchat, its biggest rival.
              Instagram also has a series of add-on apps available. These apps are Boomerang, which creates custom GIFs; Hyperlapse, which creates time-lapse videos; and Layout, which creates image collages with multiple images. When installed, these apps can be accessed directly from the Instagram app.
             </div>
          </section>
          {/* <div className="parallax img3 my-3"></div> */}
          <section className='container'>
             <h3 className='my-4'>How to set up and use Instagram</h3>
             <div className='my-3 lh-lg text-break'>
                The Instagram app is available for download on Apple's iPhone, iPad and other iOS devices through the App Store, and on Android devices through Google Play.
                Once installed, users will be prompted to sign up for free and are given the option to either input their email address, which entails creating a username and password, or to log in using their Facebook account. New users can find people to follow on Instagram by having the app look through their Facebook friends and people on their contact list.
                From the Home tab, the first screen that appears when the app is opened, Instagram users can view photos from accounts they follow in a format similar to that of Facebook's newsfeed. Instagram Stories -- posted by users you're following -- are displayed at the top of the Home feed in the form of circular profile photos. Users can access Instagram Direct at the top right corner of their home feed.
                The Explore tab of the Instagram app allows members to search for user accounts to follow or find user photos by searching hashtags or geotags. The Explore tab also presents curated content and recommendations based on the user's activity and accounts they follow, as well as trending hashtags and popular posts. The Activity tab displays recent engagement on posts in the form of likes and comments, and also recent activity from those the user is following.
                The Profile tab presents all of the user's photo and video posts in one place and a short bio. To post a photo or video, click the Camera tab, which will give the option of taking a photo or video from within the app or choosing a photo or video from the device's library.
             </div>
          </section>
        </>
     );
}
 
export default AboutMe;