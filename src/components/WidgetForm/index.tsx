import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedBackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma nuvem',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'  
    },
  },
}

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm(){
  const [feedBackType, setFeedbackType] = useState<FeedBackType | null>(null);
  return(
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>Deixe seu Feedback</span>

        <CloseButton />
      </header>

      {!feedBackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ) : 
      (
        <p>Hello word</p>
      )}

      <footer className='text-xs text-neutral-400'>
        developed by <a className='underline underline-offset-2' href='https://github.com/pedrocortez877'>Pedro Cortez</a>
      </footer>
    </div>
  );
}