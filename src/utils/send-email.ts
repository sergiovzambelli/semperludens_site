import { FormData } from "@/utils/types"

export async function sendEmail(data: FormData): Promise<{ success: boolean; message: string }> {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, message: result.message || 'Something went wrong' };
    }

    return { success: true, message: result.message };
    
  } catch (error: any) {
    return { success: false, message: error.message || 'Network error' };
  }
}
