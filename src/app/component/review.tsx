import React, { useState } from 'react';
import supabase from '../../../utils/supabase';

export default function DeviceReviewPage() {
  const [newTitle, setNewTitle] = useState('');
  const [newReviewBody, setNewReviewBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addPost = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!newTitle.trim() || !newReviewBody.trim()) {
      alert('タイトルと内容は必須です');
      return;
    }

    setIsSubmitting(true);

    try {
      // ユーザーによって提供されたデータ以外のフィールドはデータベースが自動的に設定することが期待されます
      const { error } = await supabase.from('device_reviews').insert({
        user_id: null, // ダミーの値またはユーザーの ID を挿入する必要があります
        title: newTitle,
        review_body: newReviewBody,
        is_deleted: false,
      });

      if (error) {
        throw error;
      }
      setNewTitle('');
      setNewReviewBody('');
    } catch (error) {
      console.error('データの新規登録ができません', error);
      alert('データの新規登録ができません');
    } finally {
      setIsSubmitting(false);      
    }
  };

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
                value={newReviewBody}
                rows={10}
                cols={40}
                onChange={(e) => setNewReviewBody(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : '登録'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
