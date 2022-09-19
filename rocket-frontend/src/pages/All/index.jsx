import { Container } from './styles'
import { FiLogIn } from 'react-icons/fi'
import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api.js";
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination'

export function All() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  let PageSize = 2;
  const [currentPage, setCurrentPage] = useState(1);

  function handleNavigate() {
    navigate('/login');
  }
  useEffect(() => {
    async function fetchRockets() {
      try {
        const response = await api.get('/rockets/all');
        setData(response.data);
      } catch(error){
        if(error.response){
          return toast.error(error.response.data.message);
        }else {
          return toast.error("Não foi possível localizar os rockets.");
        }
      }
    }
    fetchRockets();
  },[])
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [data,currentPage]);

  return(
    <Container>

      <Button className="btn-all" title="Faça seu login" onClick={handleNavigate} icon={FiLogIn}/>
    
      {
        currentData.map((rocket, index)=>(
          <Card 
            key={index}
            data={rocket}/>
          ))
          
        }

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    
    
    </Container>
  )
}