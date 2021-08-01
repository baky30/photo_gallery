import { motion } from 'framer-motion';
import React from 'react'
import { useFirestore } from '../hooks/useFirestore'

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('images');
    
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div key={doc.id} 
                            className="img-wrap" 
                            onClick={() => setSelectedImg(doc.url)}
                            whileHover={{ opacity: 1 }}
                            layout >
                    <motion.img src={doc.url} alt="uploaded img"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
                </motion.div>
            )) }
        </div>
    )
}
