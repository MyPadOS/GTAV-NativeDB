import { NativeJson } from '../alloc8or-nativedb'

export default async function LoadFivemNatives(): Promise<NativeJson | null> {
  try {
    const response = await fetch('https://runtime.fivem.net/doc/natives_cfx.json')

    if (!response.ok) {
      return null
    }
    
    return await response.json()
  }
  catch (e) {
    return null
  }
}