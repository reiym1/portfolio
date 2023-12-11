'use client'

import supabase from '../../../utils/supabase'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function DeviceReview() {
  const addPost = async () => {
    const { error } = await supabase.from('tests').insert({
      text: 'test',
    })
    addPost()
  }
}

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
