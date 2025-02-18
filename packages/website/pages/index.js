import { useCallback } from 'react'

import countly from '../lib/countly.js'
import Hero from '../components/hero.js'
import HashLink from '../components/hashlink.js'
import Step from '../components/step.js'
import Box from '../components/box.js'
import Link from 'next/link'
/**
 * Static Props
 *
 * @returns {{ props: import('../components/types.js').LayoutProps}}
 */
export function getStaticProps() {
  return {
    props: {
      needsUser: false,
    },
  }
}

/**
 * Home Component
 *
 */
export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <GettingStarted />
        <FAQ />
      </main>
    </>
  )
}

function About() {
  const storeText = (
    <>
      <h2 className="chicagoflf">
        <HashLink id="store">Store</HashLink>
      </h2>
      <p className="lh-copy">
        Just upload your data and you&#39;ll receive an IPFS hash of the content
        (a CID) that can be used in <strong>on-chain</strong> NFT data as a
        pointer to the content.
      </p>
      <p className="lh-copy">
        Filecoin provides long term storage for the data ensuring that even if{' '}
        <strong>nft.storage</strong> is attacked or taken down the NFT data
        persists!
      </p>
      <p className="lh-copy">
        Optionally, you can provide additional redundancy by running your own
        IPFS node and{' '}
        <a
          className="black"
          href="https://docs.ipfs.io/concepts/persistence/#pinning-in-context"
          target="_blank"
          rel="noreferrer"
        >
          pinning
        </a>{' '}
        the CIDs of content uploaded to NFT.Storage.
      </p>
      <p className="lh-copy">
        Alternately, you can use an{' '}
        <a
          className="black"
          href="https://docs.ipfs.io/concepts/persistence/#pinning-services"
          target="_blank"
          rel="noreferrer"
        >
          additional pinning service
        </a>{' '}
        for redundancy (NFT.Storage already does this when it backs things up to
        Pinata). Doing this is not necessary, but might be of interest for users
        looking to be in full control of their data and its availability.
      </p>
    </>
  )
  const retrieveText = (
    <>
      <h2 className="chicagoflf">
        <HashLink id="retrieve">Retrieve</HashLink>
      </h2>
      <p className="lh-copy">
        NFT data stored by <strong>nft.storage</strong> can be accessed from the
        decentralized IPFS network from <em>any</em> peer that has the content.
        CIDs reference <strong>immutable</strong> content so you can be sure the
        content you access is the content referenced in the NFT.
      </p>
      <p className="lh-copy">
        The data can be fetched directly in the browser using{' '}
        <a
          href="https://brave.com/ipfs-support/"
          className="black"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brave
        </a>
        , or via a{' '}
        <a
          href="https://docs.ipfs.io/concepts/ipfs-gateway/#public-gateways"
          className="black"
          target="_blank"
          rel="noopener noreferrer"
        >
          public IPFS gateway
        </a>
        , or by using{' '}
        <a
          href="https://github.com/nftstorage/ipfs-desktop"
          className="black"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPFS Desktop
        </a>{' '}
        or the{' '}
        <a
          href="https://docs.ipfs.io/how-to/command-line-quick-start/"
          className="black"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPFS command line
        </a>
        .
      </p>
      <p className="lh-copy">
        If fetching content using a public IPFS gateway (e.g., directly using an
        HTTP URL or via Brave), note that the availability and speed of
        retrieving the content depends on the gateway. In cases where the
        gateway is unable to retrieve a given CID (e.g., returns a 429 error),
        you can try a different gateway or running and using your own IPFS node
        instead.
      </p>
    </>
  )
  return (
    <article className="bg-nsgreen">
      <div className="mw9 center pa4 pa5-ns">
        <h1 className="chicagoflf">
          <HashLink id="about">About</HashLink>
        </h1>
        <p className="lh-copy about-text">
          <strong>nft.storage</strong> is a brand new service, built
          specifically for storing <strong>off-chain</strong> NFT data. Data is
          stored <em>decentralized</em> on{' '}
          <a href="https://ipfs.io" className="black">
            IPFS
          </a>{' '}
          and{' '}
          <a href="https://filecoin.io" className="black">
            Filecoin
          </a>
          , and are referenced using content-addressed IPFS URIs that can be
          used in your smart contract without fear of the data being referenced
          changing.
        </p>
        <p className="lh-copy about-text">
          To learn more about the importance of content addressing, check out
          this page on{' '}
          <a
            href="https://nftschool.dev/concepts/content-addressing/"
            className="black"
          >
            NFT School
          </a>
          .
        </p>
        <div className="store-and-retrieve-mobile">
          <div>
            {storeText}
            <div className="tc mv4">
              <img
                src="images/diagram-store.png"
                alt="diagram of storage with nft.storage"
                width="1152"
                height="1650"
                style={{ maxWidth: '576px', height: 'auto', width: '100%' }}
              />
            </div>
          </div>
          <div>
            {retrieveText}
            <div className="tc mv4">
              <img
                src="images/diagram-retrieve.png"
                alt="diagram of retrieval with nft.storage"
                width="1262"
                height="1260"
                style={{ maxWidth: '631px', height: 'auto', width: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className="relative store-and-retrieve-desktop">
          <div className="tr">
            <img
              src="images/diagram-store-and-retrieve.png"
              srcSet="images/diagram-store-and-retrieve@2x.png 2x"
              alt="diagram of storage and retrieval with nft.storage"
              width="1177"
              style={{ width: '1177px', height: 'auto', maxWidth: '90%' }}
            />
          </div>
          <div className="absolute top-0 w-100 h-100 flex justify-between">
            <div className="flex-auto" style={{ maxWidth: '30%' }}>
              <div className="pt6 pr4">{storeText}</div>
            </div>
            <div
              className="flex-auto flex items-center w-50"
              style={{ maxWidth: '35%', paddingBottom: '4rem' }}
            >
              <div>{retrieveText}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function GettingStarted() {
  const onClickHandler = useCallback((event) => {
    countly.trackCustomLinkClick(
      countly.events.CTA_LINK_CLICK,
      event.currentTarget,
      {
        ui: countly.ui.HOME_GET_STARTED,
      }
    )
  }, [])

  const jsEx = `import { NFTStorage, File } from 'nft.storage'

const apiKey = 'YOUR_API_KEY'
const client = new NFTStorage({ token: apiKey })

const metadata = await client.store({
  name: 'Pinpie',
  description: 'Pin is not delicious beef!',
  image: new File([/* data */], 'pinpie.jpg', { type: 'image/jpg' })
})
console.log(metadata.url)
// ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json`

  const curlEx = `curl -X POST --data-binary @art.jpg -H 'Authorization: Bearer YOUR_API_KEY' https://api.nft.storage/upload`

  const uploadResp = `{
  "ok": true,
  "value": { "cid": "bafy..." }
}`

  return (
    <article className="bg-yellow">
      <div className="mw9 center pa4 pa5-ns">
        <h1 className="chicagoflf tc mb5">
          <HashLink id="getting-started">Getting started</HashLink>
        </h1>
        <ol className="list tc pl0 mb5">
          <li>
            <Step>1</Step>
            <p className="chicagoflf f3 mw6 center">
              <Link href="/login">
                <a
                  className="no-underline underline-hover nsnavy"
                  onClick={onClickHandler}
                >
                  Register an nft.storage account
                </a>
              </Link>{' '}
              so that you can create API access keys.
            </p>
            <img
              width="29px"
              height="66px"
              src="images/icon-arrow-down.svg"
              alt="arrow down"
              className="mb3"
            />
          </li>
          <li>
            <Step>2</Step>
            <p className="chicagoflf f3 mw6 center">
              <Link href="/manage">
                <a
                  className="no-underline underline-hover nsnavy"
                  onClick={onClickHandler}
                >
                  Create an API access key
                </a>
              </Link>{' '}
              and note it down.
            </p>
            <img
              width="29px"
              height="66px"
              src="images/icon-arrow-down.svg"
              alt="arrow down"
              className="mb3"
            />
          </li>
          <li>
            <Step>3</Step>
            <p className="chicagoflf f3 mw6 center">
              Choose a method to get your NFT data stored:
            </p>
          </li>
        </ol>
        <div
          id="docs"
          className="db-m flex-ns justify-center center mw9 mw-none-m mw-none-ns mh-3"
        >
          <Box
            bgColor="nspeach"
            borderColor="nsnavy"
            wrapperClassName="w-100 w-100-m w-50-ns mh0 mh0-m mh3-ns mb4"
          >
            <h2 className="chicagoflf f5 fw4">
              <HashLink id="js-client-library">JS Client Library</HashLink>
            </h2>
            <p className="lh-copy">
              Install the{' '}
              <a
                href="https://npmjs.org/package/nft.storage"
                target="_blank"
                rel="noopener noreferrer"
                className="black"
              >
                JS library
              </a>
              :
            </p>
            <pre className="f6 lh-copy white bg-nsnavy pa3 br1 ba b--black code overflow-x-scroll">
              npm install nft.storage
            </pre>
            <p className="lh-copy">Use the client in Node.js or the browser:</p>
            <pre className="f6 lh-copy white bg-nsnavy pa3 br1 ba b--black code overflow-x-scroll">
              {jsEx}
            </pre>
            <p className="lh-copy">
              View the{' '}
              <a
                href="https://nftstorage.github.io/nft.storage/client/"
                target="_blank"
                rel="noopener noreferrer"
                className="black"
              >
                full library reference docs
              </a>
              .
            </p>
            <p className="lh-copy">
              For additional example code, check out our{' '}
              <a
                className="black"
                href="https://github.com/nftstorage/nft.storage/tree/main/packages/client/examples/node.js"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo
              </a>{' '}
              and{' '}
              <a
                className="black"
                href="https://nftschool.dev/tutorial/end-to-end-experience/"
                target="_blank"
                rel="noreferrer"
              >
                NFT School.
              </a>
            </p>
          </Box>
          <Box
            bgColor="nspeach"
            borderColor="nspink"
            wrapperClassName="w-100 w-100-m w-50-ns mh0 mh0-m mh3-ns mb4"
          >
            <h2 className="chicagoflf f5 fw4">
              <HashLink id="raw-http-request">Raw HTTP Request</HashLink>
            </h2>
            <p className="lh-copy">
              Configure your HTTP client and set the{' '}
              <code className="f6 bg-nspink ph2 pv1 br1 ba b--black code">
                Authorization
              </code>{' '}
              header:
            </p>
            <pre className="f6 lh-copy bg-nspink pa3 br1 ba b--black code overflow-x-scroll">
              &quot;Authorization&quot;: &quot;Bearer YOUR_API_KEY&quot;
            </pre>
            <p className="lh-copy">
              Submit a HTTP{' '}
              <code className="f6 bg-nspink ph2 pv1 br1 ba b--black code">
                POST
              </code>{' '}
              request to{' '}
              <a href="https://api.nft.storage/upload" className="black">
                api.nft.storage/upload
              </a>
              , passing the file data in the request body. e.g.
            </p>
            <pre className="f6 lh-copy bg-nspink pa3 br1 ba b--black code overflow-x-scroll">
              {curlEx}
            </pre>
            <p className="lh-copy">
              Successful requests will receive a HTTP{' '}
              <code className="f6 bg-nspink ph2 pv1 br1 ba b--black code">
                200
              </code>{' '}
              status and{' '}
              <code className="f6 bg-nspink ph2 pv1 br1 ba b--black code">
                application/json
              </code>{' '}
              response like:
            </p>
            <pre className="f6 lh-copy bg-nspink pa3 br1 ba b--black code overflow-x-scroll">
              {uploadResp}
            </pre>
            <p className="lh-copy">
              Check the{' '}
              <Link href="/api-docs">
                <a className="black">API Docs</a>
              </Link>{' '}
              for information on uploading multiple files and the other
              available endpoints.
            </p>
            <p className="lh-copy">
              For additional example code, check out our{' '}
              <a
                className="black"
                href="https://github.com/nftstorage/nft.storage/tree/main/packages/client/examples/browser"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo
              </a>
              .
            </p>
          </Box>
          {/* <Box
            bgColor="nspeach"
            borderColor="nsred"
            wrapperClassName="w-100 w-100-m w-33-ns mh0 mh0-m mh3-ns mb4"
          >
            <h2 className="chicagoflf f5 fw4">
              <HashLink id="configure-as-a-remote-pinning-service">
                Configure as a Remote Pinning Service
              </HashLink>
            </h2>
            <p className="lh-copy">
              You can use <strong>nft.storage</strong> as a{' '}
              <a
                href="https://ipfs.github.io/pinning-services-api-spec"
                className="black"
              >
                remote pinning service
              </a>{' '}
              in IPFS.
            </p>
            <pre className="f6 lh-copy white bg-nsred pa3 br1 ba b--black code overflow-x-scroll">
              ipfs pin remote service add nft-storage https://api.nft.storage
              YOUR_API_KEY
            </pre>
            <p className="lh-copy">
              Use the{' '}
              <code className="f6 white bg-nsred ph2 pv1 br1 ba b--black code">
                --help
              </code>{' '}
              option for information on other remote pinning service commands:
            </p>
            <pre className="f6 lh-copy white bg-nsred pa3 br1 ba b--black code overflow-x-scroll">
              ipfs pin remote --help
            </pre>
          </Box> */}
        </div>
      </div>
    </article>
  )
}

function FAQ() {
  return (
    <article className="bg-nsforest">
      <div className="mw9 center pa4 pa5-ns">
        <h1 className="chicagoflf white">
          <HashLink id="faq">FAQ</HashLink>
        </h1>
        <h2 className="chicagoflf white">
          <HashLink id="what-is-the-long-term-vision-for-nftstorage">
            What is the long-term vision for NFT.Storage?
          </HashLink>
        </h2>
        <p className="lh-copy white mb4">
          NFT.Storage helps NFT developers today who are looking for easy APIs
          and best practices for storing their NFT data securely and
          resiliently. Even in the short-term, it is a fairly decentralized
          solution. Users are able to trustlessly verify that the{' '}
          <a
            className="white"
            href="https://docs.ipfs.io/concepts/content-addressing"
            target="_blank"
            rel="noreferrer"
          >
            content identifiers
          </a>{' '}
          that the service provides corresponds to their data, and that this
          data is hosted in multiple ways across the IPFS and Filecoin networks
          (allowing for accessibility across the network and preventing
          lock-in).
          <br />
          Though we believe that there will always be value in some form of the
          libraries and services NFT.Storage provides, in the long-term the goal
          is to increasingly decentralize NFT.Storage. This includes, but is not
          limited to, making it easy for users to deploy and run their own
          NFT.Storage storage service, as well as relying more directly on the
          Filecoin network (e.g., storing data directly on the Filecoin network
          without putting it on a centralized IPFS node first), upgrading
          {"today's"} NFT.Storage implementation into the provably permanent
          storage solutions of tomorrow.
        </p>
        <h2 className="chicagoflf white">
          <HashLink id="how-long-will-data-be-stored-on-nftstorage">
            How long will data be stored on NFT.storage?
          </HashLink>
        </h2>
        <p className="lh-copy white mb4">
          Data will be available in IPFS indefinitely as well as stored in
          long-term, redundant Filecoin storage deals with the global community
          of miners. See the{' '}
          <Link href="/terms">
            <a className="white">Terms of Service</a>
          </Link>{' '}
          for details.
        </p>
        <h2 className="chicagoflf white">
          <HashLink id="are-there-any-size-restrictions-for-stored-nfts">
            Are there any size restrictions for stored NFTs?
          </HashLink>
        </h2>
        <p className="lh-copy white mb4">
          NFT.storage can store NFTs up to <strong>32GB </strong>
          in size! (There was previously a 100MB limit due to Cloudflare workers
          but NFT.storage now supports chunked uploads, allowing files bigger
          than 100MB to be uploaded! 🎉)
        </p>
        <h2 className="chicagoflf white">
          <HashLink id="where-can-i-learn-more-about-nft-best-practices">
            Where can I learn more about NFT best practices?
          </HashLink>
        </h2>
        <p className="lh-copy white mb4">
          Visit{' '}
          <a href="https://nftschool.dev" className="white">
            NFT School
          </a>{' '}
          for information on NFT best practices as well as a variety of helpful
          tutorials and how-to guides for NFT developers.
        </p>
        <h2 className="chicagoflf white">
          <HashLink id="who-can-access-the-data-i-store-on-nftstorage">
            Who can access the data I store on NFT.Storage?
          </HashLink>
        </h2>
        <p className="lh-copy white mb4">
          All data uploaded to NFT.Storage is available to anyone who requests
          it using the correct CID. Do not store any private or sensitive
          information in an unencrypted form using NFT.Storage.
        </p>
        <h2 className="chicagoflf white">
          <HashLink id="can-i-delete-my-data-on-nftstorage">
            Can I delete my data on NFT.Storage?
          </HashLink>
        </h2>
        <p className="lh-copy white mb4">
          You can delete data from being associated with your account, and it
          will no longer appear on the Files page of your account. However, this
          doesn’t prevent nodes in the IPFS decentralized storage network from
          retaining copies of the data indefinitely. Do not use NFT.Storage for
          data that may need to be permanently deleted in the future.
        </p>
        <h2 className="chicagoflf white">
          <HashLink id="can-i-delete-my-data-on-nftstorage">
            I tried using an HTTP gateway to retrieve my content from IPFS but
            am receiving an HTTP error. Does this mean my content was not stored
            successfully on NFT.Storage?
          </HashLink>
        </h2>
        <p className="lh-copy white mb4">
          Not necessarily! HTTP gateways are a great way for users who{' '}
          {"aren't"} running their own IPFS nodes to retrieve content from the
          IPFS network. However, they do introduce a centralized point of
          failure to a user flow. If a given gateway is down, or is under too
          much load, or is facing other issues, users who are accessing content
          through that gateway might be unable to access content. In this case,
          we recommend trying another gateway or running and using your own IPFS
          node.
        </p>
      </div>
    </article>
  )
}
