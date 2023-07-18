import React,{useState} from 'react'
import Button from "../../../shared/Button";
import { useQueryClient, useMutation } from 'react-query';
import { matchManito } from '../../../../api/API';

/** 마니또 매칭 요청 테스트 */
function TestPost() {
    const queryClient = useQueryClient();    

    const {mutate} = useMutation(matchManito,{
        onSuccess: () => {
            console.log('Post Success');
            queryClient.invalidateQueries('manitoList');
        },
        onError: () => {
            console.log('Post Error');
        }
    });

    const handleRequest = () => {
        mutate();
    }

  return (
    <Button handleBtnClick={handleRequest}>POST TEST</Button>
  )
}

export default TestPost 