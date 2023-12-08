
class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.cache = new Map();
        this.accessOrder = [];
    }

    get(key) {
        if (this.cache.has(key)) {
            this.updateAccessOrder(key);
            return this.cache.get(key);
        }
        return null;
    }

    set(key, value) {
        if (this.cache.size >= this.maxSize) {
            const lruKey = this.accessOrder.pop();
            this.cache.delete(lruKey);
        }
        this.cache.set(key, value);
        this.updateAccessOrder(key);
    }

    updateAccessOrder(key) {
        if (this.accessOrder.includes(key)) {
            this.accessOrder = this.accessOrder.filter(item => item !== key);
        }
        this.accessOrder.unshift(key);
    }

    resetCache() {
        this.cache.clear();
        this.accessOrder = [];
    }
}

export default LRUCache;