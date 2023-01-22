import type { ActionArgs } from "@remix-run/node"
import { json, redirect } from "@remix-run/node"

import { useLoaderData } from '@remix-run/react'

import NewNote from '~/components/NewNote'

import type { NotesType } from '~/components/NoteList'
import NoteList from '~/components/NoteList'

export default function Notes() {
  const notes = useLoaderData<NotesType>()
  // useActionData

  console.dir(notes)
  return <main>
    <NewNote />
    <NoteList notes={notes} />
  </main>
}

export async function loader () {
  return json<NotesType>([
    {
      title: 'titulo primeiro'
    },
    {
      title: 'titulo segundo'
    },
    {
      title: 'titulo terceiro'
    }
  ])
}

export async function action (actionArgs: ActionArgs) {
  const formData = await actionArgs.request.formData()
  const objData = Object.fromEntries(formData)
  console.log('dados recebidos')
  console.dir(objData)

  return redirect('/notes')
}