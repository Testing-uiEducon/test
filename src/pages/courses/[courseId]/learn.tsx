import LearnContainer from "@/components/Learn/LearnContainer";
import EmailVerifyWrapper from "@/components/wrappers/email-verify-wrapper";
import PrivateRouteWrapper from "@/components/wrappers/private-route-wrapper";
import LearnContextProvider from "@/context/LearnContextProvider";
import Head from "next/head";
import Script from "next/script";
import React from "react";

type Props = {};

const learn = (props: Props) => {
  <Head>
    <script src="https://static.testpress.in/static/js/player.js"></script>
    <script>
      var iframe = document.querySelector('iframe'); var player = new
      Testpress.Player(iframe); console.log(player);
    </script>
  </Head>;
  return (
    <PrivateRouteWrapper>
      <EmailVerifyWrapper>
        <LearnContextProvider>
          <LearnContainer />
        </LearnContextProvider>
      </EmailVerifyWrapper>
    </PrivateRouteWrapper>
  );
};

export default learn;
