import Layout from '../components/Layout'
import HomeButton from '../components/HomeButton'
import Link from 'next/link'

interface  ThingiesBoxProps { title: string; list: string[] }
const ThingiesBox = (props: ThingiesBoxProps) => (
    <div className="box">
        <h2 className="title">{props.title}</h2>
        <ul>
            {props.list.map((item, i) => (
                <li key={i} >{item}</li>
            ))}
        </ul>
            
        <style jsx>{`
            li {
                list-style: none;
            }
            .box {
                width: 200px;
                border: 1px dotted gray;
            }
            .title {
                border-bottom: 1px solid black
            }
        `}</style>
    </div>
)

export default () => (
    <Layout>
        <ul>
            <li>Cast Games</li>
            <li>Join Teams</li>
            <li>Schedule Matches</li>
            <li>Review Scrims</li>
            <li>Hire Coaching</li>
            <li>Git Gud</li>
        </ul>
        <br />
        <HomeButton />
        <ThingiesBox title='Best Teams' list={[
            'London Spitfire',
            'Philadelphia Fusion'
        ]}/>
        <ThingiesBox title='Best Free Agents' list={[
            'Nihl',
            'Taco'
        ]}/>
        <ThingiesBox title='Best Coaches' list={[
            'CoachGuy',
            'SteveTheCoach'
        ]}/>
        <ThingiesBox title='Best Casters' list={[
            'Uber',
            'Uber',
            'Uber'
        ]}/>

        <style jsx>{`
            ul {
                list-style: none;
            }
        `}</style>
    </Layout>
)

// function getPosts () {
//     return [
//         { id: 'hello-nextjs', title: 'Hello Next.js'},
//         { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
//         { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'}
//     ]
// }

// const PostLink = ({ post }) => (
//     <li>
//       <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//         <a>{post.title}</a>
//       </Link>
//       <style jsx>{`
//         li {
//             list-style: none;
//             margin: 5px 0;
//         }

//         a {
//             text-decoration: none;
//             color: blue;
//             font-family: "Arial"
//         }

//         a:hover {
//             opacity: 0.6;
//         }
//       `}</style>
//     </li>
//   )

// export default () => (
//     <Layout>
//         <h1>My Blog</h1>
//         <ul>
//             {getPosts().map((post) => (
//                 <PostLink key={post.id} post={post} />
//             ))}
//         </ul>
//         <style jsx>{`
//             h1, a {
//                 font-family: "Arial";
//             }

//             ul {
//                 padding: 0;
//             }
//         `}</style>
//     </Layout>
// )

// const Index = (props) => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {props.shows.map(({show}) => (
//                 <li key={show.id}>
//                     <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// )

// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()

//     console.log(`Show data fetched. Count ${data.length}`)

//     return {
//         shows: data
//     }
// }

// export default Index