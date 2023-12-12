'use client'

// import supabase from '../../../utils/supabase'
// import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'
// import Head from 'next/head'

// export default function DeviceReview() {
//   const addPost = async () => {
//     const { error } = await supabase.from('tests').insert({
//       text: 'test',
//     })
//     addPost()
//   }
// }

// return (
//     <>
//        <form onSubmit={addPost}>
//           <div>
//             <label>タイトル</label><br/>
//             <input
//               type="text"
//               value={newTitle}
//               onChange={(e) => setNewTitle(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>内容</label><br/>
//             <textarea value={newContent} rows={10} cols={40}  onChange={(e) => setNewContent(e.target.value)}/>
//           </div>
//           <div>
//             <button type="submit">登録</button>
//           </div>
//       </form>
//     </>
//   )

import Head from 'next/head'
import supabase from '../../../utils/supabase'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Top() {
  const [newTitle, setNewTitle] = useState('')
  const [newReview_Body, setNewReview_Body] = useState('')
  const [newText, setNewText] = useState('')

  const addPost = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const { error } = await supabase.from('device_reviews').insert({
        title: newTitle,
        content: newReview_Body,
      })
      if (error) throw error
      await indexPost()
      setNewTitle('')
      setNewReview_Body('')
    } catch (error) {
      alert('データの新規登録ができません')
    }
  }

  return (
    <>
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
                  value={newReview_Body}
                  rows={10}
                  cols={40}
                  onChange={(e) => setNewReview_Body(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">登録</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

function indexPost() {
  throw new Error('Function not implemented.')
}
