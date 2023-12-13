// 'use client'

// import Head from 'next/head'
// import supabase from '../../../utils/supabase'
// import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'

// export default function Top() {
//   const [newTitle, setNewTitle] = useState('')
//   const [newText, setNewText] = useState('')

//   const addPost = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     try {
//       const { error } = await supabase.from('test').insert({
//         // title: newTitle,
//         text: newText,
//         // review_body: newContent,
//       })
//       if (error) throw error
//       indexPost()
//       setNewTitle('')
//       setNewText('')
//     } catch (error) {
//       alert('データの新規登録ができません')
//     }
//   }

//   return (
//     <>
//       <div className="">
//         <main className="">
//           <div>
//             <form onSubmit={addPost}>
//               <div>
//                 <label>タイトル</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={newTitle}
//                   onChange={(e) => setNewTitle(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label>内容</label>
//                 <br />
//                 <textarea
//                   value={newText}
//                   rows={10}
//                   cols={40}
//                   onChange={(e) => setNewText(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <button type="submit">登録</button>
//               </div>
//             </form>
//           </div>
//         </main>
//         {/* <footer className="">
//       </footer> */}
//       </div>
//     </>
//   )
// }

// function indexPost() {
//   throw new Error('Function not implemented.')
// }

'use client'
import { useState } from 'react'
import supabase from '../../../utils/supabase'

export default function YourComponent() {
  const [newText, setNewText] = useState('')
  const [newTitle, setNewTitle] = useState('') // 追加: タイトル用の state

  const addPost = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const { error } = await supabase
        .from('tests')
        .insert([{ text: newText, title: newTitle }], { count: 'exact' })

      if (error) {
        throw error
      }

      await indexPost()
      setNewText('')
      setNewTitle('') // タイトルをクリア
    } catch (error) {
      console.error('データの新規登録ができません', error)
      alert('データの新規登録ができません')
    }
  }

  function indexPost() {
    setNewText('')
    setNewTitle('')
    // throw new Error('Function not implemented.');
  }

  return (
    <div>
      <main>
        <div>
          <form onSubmit={addPost}>
            <div>
              <label>タイトル</label>
              <br />
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div>
              <label>内容</label>
              <br />
              <textarea
                value={newText}
                rows={10}
                cols={40}
                onChange={(e) => setNewText(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">登録</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

// 'use client'
// import Head from 'next/head'
// import useStore from '../../../store'
// import supabase from '../../../utils/supabase'
// import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'

// export default function Top() {
//   const [newTitle, setNewTitle] = useState('')
//   const [newReview_Body, setNewReview_Body] = useState('')
//   const { loginUser } = useStore()
//   const [user, setUser] = useState<{ user_name?: string }>({})

//   useEffect(() => {
//     supabase
//       .from('review_body')
//       .select()
//       .eq('id', loginUser.id)
//       .then((res) => {
//         setUser(res?.data ? res.data[0] : {})
//       })
//   }, [])

//   const addPost = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     try {
//       const { error } = await supabase.from('review_body').insert({
//         title: newTitle,
//         review_body: newReview_Body,
//       })
//       if (error) throw error
//       setNewTitle('')
//       setNewReview_Body('')
//     } catch (error) {
//       alert('データの新規登録ができません')
//     }
//   }

//   return (
//     <>
//       <div>
//         <main>
//           <div>
//             <form onSubmit={addPost}>
//               <div>
//                 <label>タイトル</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={newTitle}
//                   onChange={(e) => setNewTitle(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label>内容</label>
//                 <br />
//                 <textarea
//                   value={newReview_Body}
//                   rows={10}
//                   cols={40}
//                   onChange={(e) => setNewReview_Body(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <button type="submit">登録</button>
//               </div>
//             </form>
//           </div>
//         </main>
//       </div>
//     </>
//   )
// }
