import { useState, useEffect } from 'react'
import axios from 'axios'
import services from '../services'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

  useEffect(() => {
    // services.getAll(baseUrl).then((all) => setResources(all))
    getAll(baseUrl).then((all) => setResources(all))
  }, [])

  const create = (resource) => {
    services.create(baseUrl, resource)
    //   .then(...resources, resources.concat(resource))
  }

  //   const create = async (resource) => {
  //     const response = await axios.post(baseUrl, resource)
  //     return response.data
  //   }

  const service = {
    create,
  }

  return [resources, service]
}
