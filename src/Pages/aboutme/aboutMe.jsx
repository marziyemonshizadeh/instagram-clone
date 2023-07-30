import React from "react";
import LazyImg from "../../components/lazyLoadImg/lazyLoadImg";
import ReactFastMarquee from "../../components/reactFastMarquee/reactFastMarquee";
import Title from "../../components/title/title";

import "./aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="parallax img1"></div>
      <section className="lh-lg text-break">
        Instagram is a photo and video sharing social networking service owned
        by American company Meta Platforms. The app allows users to upload media
        that can be edited with filters and organized by hashtags and
        geographical tagging. Posts can be shared publicly or with preapproved
        followers. Users can browse other users' content by tag and location,
        view trending content, like photos, and follow other users to add their
        content to a personal feed. Instagram was originally distinguished by
        allowing content to be framed only in a square (1:1) aspect ratio of 640
        pixels to match the display width of the iPhone at the time. In 2015,
        this restriction was eased with an increase to 1080 pixels. It also
        added messaging features, the ability to include multiple images or
        videos in a single post, and a Stories feature—similar to its main
        competitor Snapchat—which allowed users to post their content to a
        sequential feed, with each post accessible to others for 24 hours. As of
        January 2019, Stories is used by 500 million people daily. Originally
        launched for iOS in October 2010 by Kevin Systrom and Mike Krieger,
        Instagram rapidly gained popularity, with one million registered users
        in two months, 10 million in a year, and 1 billion by June 2018. In
        April 2012, Facebook Inc. acquired the service for approximately US$1
        billion in cash and stock. The Android version was released in April
        2012, followed by a feature-limited desktop interface in November 2012,
        a Fire OS app in June 2014, and an app for Windows 10 in October 2016.
        As of October 2015, over 40 billion photos had been uploaded. Although
        often admired for its success and influence, Instagram has also been
        criticized for negatively affecting teens' mental health, its policy and
        interface changes, its alleged censorship, and illegal and inappropriate
        content uploaded by users.
        <Title>History</Title>
        <p className="mt-3">
          The idea to start Instagram occurred to Kevin Systrom and Mike Krieger
          when they were working on Burbn, a check-in app for sharing locations
          with friends. Both men realized that people prefer sharing photos
          instead of sharing their locations. As a result, both men decided to
          create a dedicated photo-sharing app, which they named Instagram.
          Kevin Systrom and Mike Krieger launched Instagram in October 2010,
          though the app was available only on iOS at that time. Eventually,
          Instagram became available on Android and Windows as well. The
          co-founders handled various aspects of Instagram by themselves during
          the early days of Instagram. For instance, they handled coding,
          marketing, and customer support. As Instagram’s popularity increased,
          they eventually hired engineers and other staff to help them develop
          better features for the app. As of 2012, Instagram already had 30
          million users. Its large user base and mobile strategy attracted
          Meta’s attention to acquiring Instagram. Eventually, on April 9, Meta
          acquired Instagram for $1 billion. Meta decided to allow Instagram to
          operate independently even after the acquisition.
        </p>
        <div className=" my-4">
          <div className="row g-0">
            <div className="col-md-4">
              <LazyImg
                src="https://s.yimg.com/ny/api/res/1.2/epn_s4BQcWaaJraxuLhPcQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en-US/homerun/businessinsider.com/2c06d6672db7961fc3333a6816542fa7"
                className="img-fluid rounded-start"
                alt="mark zuckerberg"
              />
              {/* <img
                src="https://s.yimg.com/ny/api/res/1.2/epn_s4BQcWaaJraxuLhPcQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en-US/homerun/businessinsider.com/2c06d6672db7961fc3333a6816542fa7"
                className="img-fluid rounded-start"
                alt="mark zuckerberg"
              /> */}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text lh-lg ms-2">
                  Mark Zuckerberg is the face of Meta company and has the
                  highest voting power because of the high number of shares he
                  holds. However, he doesn’t have 100% ownership of Meta or
                  Instagram, as the ownership is diversified among the
                  shareholders of Meta company. While Instagram’s shares
                  themselves are not available for trading, anyone who wishes to
                  be a partial owner of Instagram can buy a significant amount
                  of Meta shares.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Title>Editing tools and features</Title>
        <p className="mt-3">
          Instagram provides a wide range of digital filters that can be applied
          to users' photos, including ones that add a vintage or faded look.
          Other editing features include Lux, an effect that lightens shadows,
          darkens highlights and increases contrast, and photo-tuning tools
          allow users to adjust brightness, contrast, saturation, sharpness,
          structure, straightness and tint. A manual tilt shift and vignette
          effect can also be added to photos.
          <br />
          In 2017, Instagram rolled out a feature that allows users to post
          multiple photos or videos at once, presented in a carousel format.
          Taking inspiration from the popular Snapchat app, Instagram introduced
          a Stories feature in 2016 that allows users to share moments from
          their day that disappear after 24 hours. Instagram Stories includes
          the ability to incorporate augmented reality-based face filters and
          stickers, and the ability to add text, drawings, emojis, links and
          geotags directly to the photo or video. In April 2017, Instagram
          Stories recorded 200 million active users, surpassing the active users
          of Snapchat, its biggest rival. Instagram also has a series of add-on
          apps available. These apps are Boomerang, which creates custom GIFs;
          Hyperlapse, which creates time-lapse videos; and Layout, which creates
          image collages with multiple images. When installed, these apps can be
          accessed directly from the Instagram app.
        </p>
        <p className="text-center text-muted my-4 fs-5">
          Companies using Instagram for Employer Branding
        </p>
        <ReactFastMarquee />
        <Title>How to set up and use Instagram</Title>
        <p className="my-3 ">
          The Instagram app is available for download on Apple's iPhone, iPad
          and other iOS devices through the App Store, and on Android devices
          through Google Play. Once installed, users will be prompted to sign up
          for free and are given the option to either input their email address,
          which entails creating a username and password, or to log in using
          their Facebook account. New users can find people to follow on
          Instagram by having the app look through their Facebook friends and
          people on their contact list. From the Home tab, the first screen that
          appears when the app is opened, Instagram users can view photos from
          accounts they follow in a format similar to that of Facebook's
          newsfeed. Instagram Stories -- posted by users you're following -- are
          displayed at the top of the Home feed in the form of circular profile
          photos. Users can access Instagram Direct at the top right corner of
          their home feed. The Explore tab of the Instagram app allows members
          to search for user accounts to follow or find user photos by searching
          hashtags or geotags. The Explore tab also presents curated content and
          recommendations based on the user's activity and accounts they follow,
          as well as trending hashtags and popular posts. The Activity tab
          displays recent engagement on posts in the form of likes and comments,
          and also recent activity from those the user is following. The Profile
          tab presents all of the user's photo and video posts in one place and
          a short bio. To post a photo or video, click the Camera tab, which
          will give the option of taking a photo or video from within the app or
          choosing a photo or video from the device's library.
        </p>
      </section>
    </>
  );
};

export default AboutMe;
