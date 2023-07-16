import React,{useState} from 'react'
import Button from "../../shared/Button";
import { useQueryClient, useMutation } from 'react-query';
import { matchManito } from '../../../../api/manito';

/** 마니또 매칭 요청 테스트 */
function TestPost() {
    const queryClient = useQueryClient();    
    const [manitoList, setManitoList] = useState('');

    const mutation = useMutation(matchManito,{
        onSuccess: () => {
            queryClient.invalidateQueries('manitoList');
        
        }
    });

  return (
    <Button>POST TEST</Button>
  )
}

export default TestPost