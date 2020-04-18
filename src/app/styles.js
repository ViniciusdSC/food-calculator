import styled from 'styled-components';

import NativeFoodTable from '~/components/FoodTable';
import NativeSearchInput from '~/components/SearchInput';

export const Page = styled.div`
  background-color: #282c34;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`

export const Container = styled.div`
  width: 80vw;
  min-height: 100vh;
  position: relative;
  top: 0px;
  left: 10vw;
`

export const FoodTable = styled(NativeFoodTable)`
  margin-top: 10px;
  width: 100%;
`

export const SearchInput = styled(NativeSearchInput)`
  margin-top: 30px;
  width: 100%;
`