import { useState, useEffect } from 'react'
import axios from 'axios'

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
    getAll().then((all) => setResources(all))
  }, [baseUrl])

  const createOne = async (resource) => {
    const response = await axios.post(baseUrl, resource)
    return response.data
  }

  const create = async (resource) => {
    console.log(resource)
    try {
      const newResource = await createOne(resource)
      console.log(newResource)
      setResources([...resources, newResource])
    } catch (error) {
      console.error('Error creating resource:', error)
      console.log(error)
    }
  }

  const service = {
    create,
  }

  return [resources, service]
}
