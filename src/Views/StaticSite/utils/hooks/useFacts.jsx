import { useMemo } from 'react'
import factsImagesWithDateRange from '../../assets/data/factsImagesWithDateRange'
import { useNavigate, createSearchParams, useSearchParams } from 'react-router-dom'

const useFacts = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const range = Number(searchParams.get('range'))
  const rangeGroupLength = 5
  const totalRanges = Math.ceil(factsImagesWithDateRange.length / rangeGroupLength)

  const handleNavigate = (index) => {
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams({ range: Number(index) })}`,
    })
  }

  const dateRange = factsImagesWithDateRange

  const rangeIndex = range >= dateRange.length ? 0 : range

  const handleNext = () => {
    const next = rangeIndex + 1
    handleNavigate(next >= dateRange.length ? 0 : next)
  }

  const handlePrev = () => {
    const prev = rangeIndex - 1
    handleNavigate(prev < 0 ? dateRange.length - 1 : prev)
  }

  const rangeGroupIndex = useMemo(() => {
    return Math.floor(rangeIndex/rangeGroupLength)
  }, [rangeIndex])

  const currentRanges = useMemo(() => {
    const start = rangeGroupIndex * rangeGroupLength
    const end = start + rangeGroupLength
    const result = dateRange.slice(start, end)
    return result
  }, [dateRange, rangeGroupIndex])
  

  return {
    dateRange,
    totalRanges,
    rangeIndex,
    selectedRange: factsImagesWithDateRange[rangeIndex],
    handleNavigate,
    handleNext,
    handlePrev,
    currentRanges
  }
}

export default useFacts