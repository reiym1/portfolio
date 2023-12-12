'use client';

import Head from "next/head";
import supabase from '../../../utils/supabase';
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';


export default function Top(){
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const addPost = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("device_reviews").insert([
        {
          title: newTitle,
          review_body: newContent,
        },
      ]);
      if (error) throw error;
      indexPost();
      setNewTitle("");
      setNewContent("");
    } catch (error) {
      alert("データの新規登録ができません");
    }
  };

  return(
    <>
      <div className="">
        <main className="">
        <div>
          <form onSubmit={addPost}>
            <div>
                <label>タイトル</label><br/>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)} />
              </div>
              <div>
                <label>内容</label><br/>
                <textarea value={newContent} rows={10} cols={40}  onChange={(e) => setNewContent(e.target.value)}/>
              </div>
              <div>
                <button type="submit">登録</button>
              </div>
          </form>
        </div>
      </main>
      {/* <footer className="">
      </footer> */}
    </div>
    </>
  )
}

function indexPost() {
  throw new Error("Function not implemented.");
}

