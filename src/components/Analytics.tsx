import Script from "next/script";

/**
 * Loads Google Analytics 4 and the Meta (Facebook) Pixel — but ONLY when the
 * matching env var is set. Until then this renders nothing, so there is zero
 * tracking in local dev unless you opt in.
 *
 * Set in .env.local (and in your Vercel project settings):
 *   NEXT_PUBLIC_GA_ID          = G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID  = 1234567890
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Meta (Facebook) Pixel */}
      {pixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
