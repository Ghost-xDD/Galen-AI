/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Nav2 from '@/components/layout/Nav2';
import CreateForm from '@/components/CreateForm';
import { useContext } from 'react';
import { FormContext } from '@/context/formContext';

const Create = () => {
  const { generationComplete } = useContext(FormContext);
  return (
    <div className="min-w-[360px]">
      <div className="bg-[url('/bg-stars.png')] bg-repeat-x bg-center relative">
        <Nav2 />
      </div>
      <CreateForm />
    </div>
  );
};

export default Create;
