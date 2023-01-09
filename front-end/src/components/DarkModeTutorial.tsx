import React, {useState, useEffect} from 'react'
import { Input,Checkbox, Radio, Space, Button, ConfigProvider } from 'antd'

type Props = {}

const DarkModeTutorial = (props: Props) => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    const mqListener = ((e:any) => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);

    const lightTheme = {
        colorPrimary: 'green',
        colorTextBase: 'green',
        colorTextLightSolid: 'white'
    }

    const darkTheme = {
        colorPrimary: 'black',
        colorTextBase: 'green',
        colorTextLightSolid: 'white'
    }

  return (
    <ConfigProvider theme={{    
        token: isDarkTheme ? lightTheme : darkTheme,
        components: {
            Checkbox: {
                colorPrimary: "purple"
            }
        }
    }}>
        <Space direction='vertical' size={12}>
            <Radio.Group value={isDarkTheme} onChange={(e) => {
                setIsDarkTheme(e.target.value);    
            }}>
                <Radio value={true}>Light</Radio>
                <Radio value={false}>dark</Radio>
            </Radio.Group>
            <Button type="primary">
                Theme Button
            </Button>
            <ConfigProvider theme={{
                inherit: false,
            }}>
                <Radio>Radio</Radio>
            </ConfigProvider>
            <ConfigProvider theme={{
                inherit: false,
                token: {
                    colorPrimary: 'purple'
                }
            }}>
                <Radio>Radio</Radio>
            </ConfigProvider>
            <Radio>Radio</Radio>
            <Checkbox>Checkbox</Checkbox>
            <Input type="text" placeholder='type here' />
        </Space>
    </ConfigProvider>
  )
}

export default DarkModeTutorial
